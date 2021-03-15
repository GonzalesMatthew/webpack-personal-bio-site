const populateBio = () => {
  document.querySelector('#bio').innerHTML = `
    <h2>Bio</h2>
    <p>
      Hi, my name is Matthew and I am a creative individual that loves
      creative people and activities. Some of my favorite hobbies include
      composing, hiking, travel, and meeting new people. I have an undergrad
      degree from UCSD's math department and have been doing analytics for
      some time. When the most enjoyable part is dashboard development and
      building the data pipelines that's when you know you should become a
      full-time dev. Outside of development I enjoy MMA, F1 racing, cooking
      new recipes, and studying financial markets.
    </p>
    `;
};

export default populateBio;
