"use client";
import Image from "next/image";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { LazyMotion, domAnimation, m } from "framer-motion";

import ImageProductMobile from "@/assets/images/image-product-mobile.jpg";
import ImageProductDesktop from "@/assets/images/image-product-desktop.jpg";

function CartIcon({ ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
        fill="#FFF"
      />
    </svg>
  );
}

function CircleIcon({ ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

function ImageMobile({ className }: { className: string }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="sm:hidden">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="h-full"
      >
        <Image
          src={ImageProductMobile}
          alt="Gabrielle Essence Eau De Parfum"
          className={cn("relative z-10", className)}
          priority={true}
          onLoad={(e: any) => setLoading(false)}
        />
      </m.div>
      <m.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: loading ? 1 : 0,
          display: loading ? "block" : "none",
          transition: { display: { delay: 0.5 } },
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 transform sm:hidden"
      >
        <CircleIcon className="text-gunmetal h-5 w-5 animate-spin" />
      </m.div>
    </div>
  );
}

function ImageDesktop({ className }: { className: string }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="hidden h-full sm:block">
      <m.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: loading ? 0 : 1,
        }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="h-full"
      >
        <Image
          src={ImageProductDesktop}
          alt="Gabrielle Essence Eau De Parfum"
          className={cn("relative z-10", className)}
          priority={true}
          onLoad={(e: any) => setLoading(false)}
        />
      </m.div>
      <m.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: loading ? 1 : 0,
          display: loading ? "block" : "none",
          transition: { display: { delay: 0.5 } },
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 transform sm:block"
      >
        <CircleIcon className="text-gunmetal h-6 w-6 animate-spin" />
      </m.div>
    </div>
  );
}

export default function Product() {
  return (
    <section className="max-w-c343 sm:max-w-c600">
      <div className="rounded-c10 overflow-hidden bg-white sm:grid sm:grid-cols-2">
        <div className="border-aurometal-saurus/50 relative border-b sm:border-b-0 sm:border-r">
          <LazyMotion features={domAnimation}>
            <ImageMobile className="sm:hidden" />
            <ImageDesktop className="hidden h-full sm:block" />
          </LazyMotion>
        </div>
        <div className="pt-c21 p-6 sm:p-8">
          <p className="font-montserrat text-c12 tracking-c5 text-aurometal-saurus mb-3 font-medium uppercase sm:mb-5">
            Perfume
          </p>
          <h2 className="font-fraunces text-c32 text-gunmetal mb-4 font-bold leading-8 sm:mb-6">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="font-montserrat leading-c23 text-aurometal-saurus sm:mb-c29 mb-6 text-sm font-medium">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="gap-x-c19 sm:mb-c30 mb-5 flex items-center">
            <p className="sr-only">Only $149.99 instead of $169.99</p>
            <p className="font-fraunces text-c32 text-deep-aquamarine font-bold leading-8">
              $149.99
            </p>
            <p className="font-montserrat text-c13 leading-c23 text-aurometal-saurus font-medium line-through">
              $169.99
            </p>
          </div>
          <button className="bg-deep-aquamarine hover:bg-deep-aquamarine-hover font-montserrat gap-x-c11 group flex h-12 w-full items-center justify-center rounded-lg text-sm font-bold text-white transition-colors duration-200">
            <CartIcon className="transition-all duration-200 group-hover:scale-110" />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
