"use client";

import { useState } from "react";
import SettingsModal from "@/components/dashboard/settings-modal";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setIsOpen(false);
    router.push("/dashboard");
  };

  return (
    <SettingsModal isOpen={isOpen} onClose={handleClose} />
  );
}
