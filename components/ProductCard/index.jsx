import {
  Card,
  SectionInfoCx,
  ExpertInfoCx,
  SectionWrapCx,
  SectionShareCx,
  SectionImageCx,
  ProgressCx,
  IconTimerCx,
  TimerCx,
} from "./styles";

const ProductCard = (props) => {
  const { name, imageUrl, categories, experts, showProgress } = props;
  console.log(props);
  const renderCategories = () => {
    return categories.map((d, i) => {
      return <p key={i}>{d.name}</p>;
    });
  };
  const renderExperts = () => {
    return experts.map((d, i) => {
      return (
        <ExpertInfoCx key={i}>
          <p>
            {d.firstName} {d.lastName}
          </p>
          <p style={{ fontWeight: "700" }}>{d.company}</p>
        </ExpertInfoCx>
      );
    });
  };
  return (
    <Card>
      <SectionImageCx url={imageUrl}>
        <div>
          <ProgressCx>
            <img src={`${process.env.basePathStatic}/images/progress.png`} />
            <p>30% completed</p>
          </ProgressCx>
        </div>
        <IconTimerCx>
          <img src={`${process.env.basePathStatic}/images/head-phone.png`} />
          <TimerCx>
            <img src={`${process.env.basePathStatic}/images/duration.png`} />
            20m
          </TimerCx>
        </IconTimerCx>
      </SectionImageCx>
      <SectionWrapCx>
        <SectionInfoCx>
          {renderCategories()}
          <h2>{name}</h2>
          {renderExperts()}
        </SectionInfoCx>
        <SectionShareCx>
          <img
            alt="share"
            src={`${process.env.basePathStatic}/images/share.png`}
          />
          <img
            alt="save"
            src={`${process.env.basePathStatic}/images/bookmark.png`}
          />
        </SectionShareCx>
      </SectionWrapCx>
    </Card>
  );
};

export default ProductCard;
