/**
 * ============================================
 * Adona.ai — Library Storage (localStorage)
 * ============================================
 * Temporary localStorage-based storage for generated images.
 * Will be replaced with Cloudflare R2 when credentials are configured.
 */

export interface LibraryItem {
    id: string;
    url: string;
    prompt: string;
    negativePrompt?: string;
    seed?: number;
    aspectRatio: string;
    model: string;
    createdAt: string;
    source: "content-swipe" | "concept" | "photoshoot" | "variations";
    isFavorite: boolean;
}

const LIBRARY_KEY = "adona_library";

export function getLibraryItems(): LibraryItem[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(LIBRARY_KEY);
        if (!raw) return [];
        return JSON.parse(raw) as LibraryItem[];
    } catch {
        return [];
    }
}

export function saveToLibrary(item: Omit<LibraryItem, "id" | "createdAt" | "isFavorite">): LibraryItem {
    const newItem: LibraryItem = {
        ...item,
        id: `img_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        createdAt: new Date().toISOString(),
        isFavorite: false,
    };

    const items = getLibraryItems();
    items.unshift(newItem); // newest first
    localStorage.setItem(LIBRARY_KEY, JSON.stringify(items));
    return newItem;
}

export function saveMultipleToLibrary(
    urls: string[],
    meta: {
        prompt: string;
        negativePrompt?: string;
        seed?: number;
        aspectRatio: string;
        model?: string;
        source?: LibraryItem["source"];
    }
): LibraryItem[] {
    const items = getLibraryItems();
    const newItems: LibraryItem[] = urls.map((url, i) => ({
        id: `img_${Date.now()}_${i}_${Math.random().toString(36).slice(2, 8)}`,
        url,
        prompt: meta.prompt,
        negativePrompt: meta.negativePrompt,
        seed: meta.seed,
        aspectRatio: meta.aspectRatio,
        model: meta.model || "stable-diffusion-3.5-large-turbo",
        createdAt: new Date().toISOString(),
        source: meta.source || "content-swipe",
        isFavorite: false,
    }));

    const updated = [...newItems, ...items];
    localStorage.setItem(LIBRARY_KEY, JSON.stringify(updated));
    return newItems;
}

export function toggleFavorite(id: string): void {
    const items = getLibraryItems();
    const idx = items.findIndex((item) => item.id === id);
    if (idx !== -1) {
        items[idx].isFavorite = !items[idx].isFavorite;
        localStorage.setItem(LIBRARY_KEY, JSON.stringify(items));
    }
}

export function deleteFromLibrary(id: string): void {
    const items = getLibraryItems().filter((item) => item.id !== id);
    localStorage.setItem(LIBRARY_KEY, JSON.stringify(items));
}

export function clearLibrary(): void {
    localStorage.removeItem(LIBRARY_KEY);
}
