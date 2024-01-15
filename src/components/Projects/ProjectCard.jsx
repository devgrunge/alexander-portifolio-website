import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  const intl = useIntl();
  const { skills, demo, source, description } = project;
  const currentLanguage = intl.locale;
  const localizedProject = project[currentLanguage];

  if (!localizedProject) {
    return null;
  }

  const { title, imageSrc } = localizedProject;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{localizedProject.description}</p>
      <ul className={styles.skills}>
        {localizedProject.skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {localizedProject.demo === "Coming soon..." || "Em breve..." ? (
          <></>
        ) : (
          <a href={demo} className={styles.link}>
            Demo
          </a>
        )}
        <a href={source} className={styles.link}>
          <FormattedMessage id="projects.source" />
        </a>
      </div>
    </div>
  );
};
