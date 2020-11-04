const endPoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
const newQuoteButton = document.querySelector('#js-new-quote');
const spinner = document.querySelector('#js-spinner');
const twitterButton = document.querySelector('#js-tweet');

async function getQuote() {
    // remove the "hidden" class on the spinner
    spinner.classList.remove('hidden');
    // disable the quote button
    newQuoteButton.disabled = true;

    // The `try` block executes the statements within it as usual.
    // If an exception is thrown, the statements defined in
    // the `catch` block will be executed.
    // Learn more here: https://javascript.info/try-catch
    try {
        const response = await fetch(endPoint);
        // If the response is not 200 OK...app
        if (!response.ok) {
            // ...thrown an error. This causes control flow
            // to skip to the `catch` block below.
            throw Error(response.statusText);
        }

        const json = await response.json();
        displayQuote(json.message);
        setTweetButton(json.message);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    } finally {
        // enable the quote button
        newQuoteButton.disabled = false;
        // add the "hidden" class back again
        spinner.classList.add('hidden');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function setTweetButton(quote) {
    twitterButton.setAttribute(
        'href',
        `https://twitter.com/share?text=${quote} - Donald Trump`
    );
}

newQuoteButton.addEventListener('click', getQuote);
getQuote();