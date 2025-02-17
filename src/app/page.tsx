import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marcketplace for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to DigitalHippo. Every asset on our plateform is verified by
          our team to ensure our highest quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* step 1: run command "npx shadcn-ui@latest add button" to add button from shadcn ui library
          step 2: when we open button file under ui folder we see that to use it 1st call buttonVarients() and to style it we can use varient 
          Note: varients a just diff styles that we can use according to our need
          */}
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>

      {/* TODO: List products */}
    </MaxWidthWrapper>
  );
}
