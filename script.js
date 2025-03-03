function encurtarUrl() {
    let url = document.getElementById("input-url").value;
    if (!url) {
        alert("Insira uma url para encurtar!");
        return;
    }

    //api key: f89f5a6f5b5e45089850428d3e9ce18d

    let headers = {
        "Content-Type": "application/json",
        "apiKey": "f89f5a6f5b5e45089850428d3e9ce18d"
    }

    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl; 
        });
}
