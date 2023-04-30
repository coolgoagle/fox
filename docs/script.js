
async function markdown() {
    // Get the Markdown content from your file or source
    const markdownContent = await fetch("https://cdn.jsdelivr.net/npm/foxgpt@latest/README.md").then(res => res.text())

    // Create a new instance of the Showdown converter
    const converter = await new showdown.Converter()

    // Convert the Markdown to HTML
    const htmlContent = await converter.makeHtml(markdownContent)

    // Insert the HTML content into the container element
    document.getElementById('markdown-container').innerHTML = htmlContent
}

markdown()