# Design a reusable React component that displays a list of items, each represented by a card with an image and a description. Explain how you would handle cases where the image URL is broken or not loading.

I used onError event handler on the image (img) tag, which will get triggered if URL is broken or not working
and set an alternate dummy image to render if error occur.
In this way we can ensure a seamless and error-free user experience.

Additionaly we can add a loader to let the images load first then displaying the cards