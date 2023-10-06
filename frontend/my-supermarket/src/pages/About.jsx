import aboutData from "../TextData"

export function About() {
  return (
      <div className="about-page">
      <h1>{aboutData.title}</h1>
      <h2>{aboutData.subtitle}</h2>
      
      <p>{aboutData.description}</p>
      
      <h2>{aboutData.historyTitle}</h2>
      <ul>
        {aboutData.history.map((event, index) => (
          <li key={index}>
            <strong>{event.year}:</strong> {event.description}
          </li>
        ))}
      </ul>
      
      <h2>{aboutData.mission}</h2>
      <p>{aboutData.missionStatement}</p>
      
      <h2>{aboutData.whyChooseUs}</h2>
      <ul>
        {aboutData.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
}
