# yuva conference site

Static HTML, CSS, and JavaScript landing page.

## Add your Google Forms links

1. Open your Google Form and choose **Send**.
2. Copy the responder link. It usually ends in `/viewform`.
3. Open `script.js` and paste each link between the matching quotes:

```js
const FORM_LINKS = {
  registration: "https://docs.google.com/forms/d/e/YOUR_REGISTRATION_FORM_ID/viewform",
  suggestions: "https://docs.google.com/forms/d/e/YOUR_SUGGESTIONS_FORM_ID/viewform"
};
```

Keep the quotes and comma. Registration buttons use the `registration` URL; “Share a suggestion” uses the `suggestions` URL. Save the file and upload the complete `outputs` folder again. Until links are added, these buttons are intentionally inactive.

## Add your conference image

In `index.html`, search for `IMAGE INSERTION`. Put your image in an `images` folder inside `outputs` and replace the placeholder artwork elements described in that comment with:

```html
<img class="hero-image" src="images/your-image.jpg" alt="Describe your conference artwork">
```

You can also edit the comments marked `EDIT` in `index.html` to change the date, location, introduction, and session details. The `styles.css` file controls colors, spacing, and layout.

Review `privacy.html` and `terms.html` with the organiser's actual policies and contact details before publishing. Both pages are marked as drafts.

Open `index.html` in a browser or host the `outputs` folder on a static web host.
