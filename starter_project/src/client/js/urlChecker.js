function checkForUrl(inputText) {
    const regex = new RegExp('\\b(?:http:\\/\\/|https:\\/\\/|www\\.)?(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}(?:\\/[^\\s]*)?\\b');
    return regex.test(inputText);
}

export { checkForUrl };