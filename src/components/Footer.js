import React from "react"

const Footer = () => (
  <footer className="bg-blue-700">
      <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
        <p className="text-white">
          Created by{` `}
          <a
            className="font-bold no-underline text-white"
            href="https://scottcardoza.com"
          >
            Scott Cardoza
          </a>
        </p>

        <p>
          <a
            className="font-bold no-underline text-white"
            href="https://github.com/taylorbryant/gatsby-starter-tailwind"
          >
            instagram
          </a>
        </p>
      </nav>
    </footer>
)

export default Footer