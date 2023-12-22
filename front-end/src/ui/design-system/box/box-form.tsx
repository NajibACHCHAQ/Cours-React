import clsx from "clsx";
import React from "react";
import '@/styles/styles-box-form.css'

interface Props {
  children: React.ReactNode;
  className?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>; // Ajout de la prop onSubmit
}

export const BoxForm = ({ children, className, onSubmit }: Props) => {
  return (
    <form className={clsx("box-form", className)} onSubmit={onSubmit}>
      {children}
    </form>
  );
};