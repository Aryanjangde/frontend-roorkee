import { IoArrowBackOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { TbBuilding } from "react-icons/tb";
import { TfiBag } from "react-icons/tfi";
import { BsGenderFemale } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import styles from '../styles/schemes.module.css';

export default function Schemes()
{
  return (
    <div className={styles.schemesContainer}>
      <button className = {styles.backBtn}><IoArrowBackOutline className = {styles.backArrow}/> Back</button>
      <div className={styles.schemesSection}>
        <h1 className={styles.heading}>Job Openings</h1>
        <div>
          <button className={styles.langBtn}>Regional Language</button>
          <button className={styles.engBtn}>English</button>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.checkBtn}><FiMapPin className={styles.checkIcons}/> State</button>
        <button className={styles.checkBtn}><TbBuilding className={styles.checkIcons}/> Department</button>
        <button className={styles.checkBtn}><TfiBag className={styles.checkIcons}/> Occupation</button>
        <button className={styles.checkBtn}><BsGenderFemale className={styles.checkIcons}/> Gender</button>
        <button className={styles.checkBtn}><MdCurrencyRupee className={styles.checkIcons}/> Income</button>
      </div>
      
    </div>
  )
}