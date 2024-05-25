document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
      content:
        "-----------------------------------------" +
        "\nName: " + formData.get('name') +
        "\nEmail: " + formData.get('email') + 
        "\nMessage: " + formData.get('message') +
        "\n-----------------------------------------",
    };

    const response = await fetch('https://discord.com/api/webhooks/1243916189449584691/N0f3h9IK_FDUZzaP23pCuaBYB-oJuI1LWGlWMsUdC7JzQLptyNI5ZQdDNfHw6vug533_', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if(response.ok) {
      event.target.reset();
    }
  });
});
