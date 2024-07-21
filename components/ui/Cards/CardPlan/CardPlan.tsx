import Image from "next/image";

// Components
import { PlanDescription } from "../PlanDescription/PlanDescription";

// styles
import styles from "./CardPlan.module.css";

// Shared
import { CardPlanProps } from "shared";

const CardPlan: React.FC<CardPlanProps> = ({ imageSrc, summary }) => {
  return (
    <div className={styles["plan-container"]}>
      <div className={styles["image-container"]}>
        <Image src={imageSrc} alt="Plan" width={588} height={570} />
      </div>
      <div className={styles["descriptions-container"]}>
        {summary.map((description, index) => (
          <div key={index} className={styles.description}>
            <PlanDescription
              index={index}
              details={description.details}
              title={description.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export { CardPlan };
