import Skeleton from "@mui/material/Skeleton";
import { SkeletonWrapCx } from "./styles";

const Loader = () => {
  return (
    <SkeletonWrapCx>
      <Skeleton variant="rectangular" width={220} height={212} />
      <Skeleton />
      <Skeleton width="60%" />
    </SkeletonWrapCx>
  );
};

export default Loader;
