import Titles from '../../../../components/Titles/Titles';
import InstructionCards from '../../../../components/InstructionCard/InstructionCards';
import watering from '../../../../assets/images/water.svg';
import sun from '../../../../assets/images/sun.svg';
import nutrients from '../../../../assets/images/fertilizer.svg';
import style from './instructions.module.css';
const instructions = () => {
  return (
    <div className={style.container}>
      <section className={style.instructions}>
        <header>
          <Titles titleText="steps to take care of your" highlightText="Plants" text={`By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you will be well on your way to\nmaintaining healthy and thriving plants`} />
        </header>
        <div className={style.cardsContainer}>
          <InstructionCards icon={watering} title="Watering" description="Water your plants when the top inch of soil feels dry to the touch. Avoid overwatering , as it can lead to root dehydration" />
          <InstructionCards icon={sun} title="Sunlight" description="Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs" />
          <InstructionCards icon={nutrients} title="Nutrients and Fertilizing" description="Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula." />
        </div>
      </section>
    </div>
  );
};

export default instructions;
