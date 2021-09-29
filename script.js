fetch('https://api.quotable.io/random')
  .then(data => data.json())
  .then(motivData=> {
      const motivText = motivData.content;
      const motivElement = document.getElementById('motivElement');

      motivElement.innerHTML = motivText;
  })