import * as React from "react";

// markup
const IndexPage = () => {
  return (
    <>
      <nav>
        logo
        <ul>
          <li>About</li>
          <li>Success Stories</li>
          <li>FAQs</li>
        </ul>
      </nav>
      <main>
        <h1>Growth Capital ‍For Founders Like You</h1>
        <p>
          Supercharged funding from £10K to £2M for your marketing & inventory
          purchases.
        </p>
        <a href="#">Get funded</a>
        <button>How it works</button>
        <p>Already have an account? Log in</p>
        {/* TODO image */}
        <h2>We’ve funded 100s of brands like yours</h2>
        {/* TODO Logos */}
      </main>
    </>
  );
};

export default IndexPage;
