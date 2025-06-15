import styles from './style.module.css';
import clsx from 'clsx';
import TechIcon from '../TechIcon';
import techCategories from '../../data/techCategories';


export default function TechStack() {
  return (
    <section className={clsx('margin-top--lg', styles.techStackSection)}>
      <div className="container">
        <h2 className="text--center">🛠️ My Tech Stack</h2>
        <div className={clsx('row', styles.techGrid)}>
          {techCategories.map((category, index) => (
						<div key={index} className="margin-bottom--lg">
							<h3 className="text--center">{category.title}</h3>
							<div className={styles.techGrid}>
								{category.items.map((tech, idx) => (
									<div key={idx} className={styles.techCardWrapper}>
										<a
											href={tech.link || '#'}
											target="_blank"
											rel="noopener noreferrer"
											className={styles.techCard}
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											<TechIcon
												name={tech.name}
												iconUrl={tech.iconUrl}
												Svg={tech.Svg}
												lightColor={tech.lightColor}
												darkColor={tech.darkColor}
												size={48}
											/>
											<p>{tech.name}</p>
										</a>
									</div>
								))}
							</div>
						</div>
					))}
        </div>
      </div>
    </section>
  );
}
