import { useRef } from 'react';
import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const emailEl = useRef();
  // fetcher is perfect and ideal for pages where you wanna send requests without switching the page (example : a newsletter you can sign up that is in the footer, so it will be on every pages)
  const fetcher = useFetcher();

  function signupForNewsletterHandler(event) {
    event.preventDefault();
    const enteredEmail = emailEl.current.value;
    // could validate input here
    fetcher.submit(
      // better: use fetcher.Form instead
      { email: enteredEmail },
      { method: 'post', action: '/newsletter' }
    );
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up for our weekly newsletter</h2>
      <fetcher.Form onSubmit={signupForNewsletterHandler}>
        <input
          ref={emailEl}
          id="email"
          type="email"
          placeholder="Your email"
          aria-label="Your email address."
        />
        <button>Sign Up</button>
      </fetcher.Form>
    </section>
  );
}

export default NewsletterSignup;