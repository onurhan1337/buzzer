'use client'

import Link from "next/link";
import {Button} from "../../dist/index.mjs";

export default function Home() {

    const handleClick = () => {
        alert("Yep, it's a button. But it's a cool button created with klik.")
    }

  return (
      <div>
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                  <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
                    collier.
                  </h2>
                  <p className="mx-auto italic font-semibold text-center my-4 max-w-xl text-3xl text-black">
                        JUST A BUTTON.
                  </p>
                  <div className="mt-10 flex items-center w-1/4 mx-auto justify-center gap-x-6">
                    <Button
                        variant="default"
                        size="default"
                        onClick={handleClick}
                        className="w-full"
                    >
                        Click me
                    </Button>
                      <Button
                            variant="outline"
                            size="default"
                            className={"bg-gradient-to-br from-gray-50/10 to-gray-200/60"}
                            asChild={true}
                        >
                            <Link href="https://github.com/onurhan1337/klik" passHref={true} rel="noopener noreferrer" target="_blank">
                            Github
                            </Link>
                        </Button>
                      
                  </div>
              </div>
      </div>
  )
}
