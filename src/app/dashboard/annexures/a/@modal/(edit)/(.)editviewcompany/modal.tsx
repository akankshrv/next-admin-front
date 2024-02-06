"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ViewCompanyComponent from "@/components/Annexures/a/ViewCompany/ViewCompanyComponent";


export function Modal() {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal " onClose={onDismiss}>
        <Button onClick={onDismiss} className="close-button" />

        <ViewCompanyComponent edit={true}/>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
