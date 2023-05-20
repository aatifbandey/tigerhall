import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Card = styled.article`
  display: flex;
  flex-direction: column;

  background: #ffffff;
  border-radius: 8px 8px 8px 8px;
  width: 244px;
  height: 272px;
  img {
    width: 24px;
    height: 24px;
    border-radius: 8px 8px 0px 0px;
    overflow: hidden;
    object-fit: cover;
    aspect-ratio: 1;
  }
`;

export const SkeletonWrapCx = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 6px;
`;

export const SectionInfoCx = styled.section`
  display: flex;
  margin: 0px 0 0 0;
  flex-direction: column;
  gap: 2px;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-transform: capitalize;
  }
  p {
    text-transform: uppercase;
  }
`;

export const ExpertInfoCx = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0 0 0;
  gap: 2px;
  span {
    text-transform: capitalize;
  }
  p {
    color: #797670;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 12px;
  }
`;

export const SectionWrapCx = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 12px 8px;
`;

export const SectionShareCx = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin: 8px 0 0 0;
  img {
    height: 18px;
    width: 15px;
    object-fit: contain;
  }
`;

export const SectionImageCx = styled.section`
  background: url("${(props) => props.url}");
  background-repeat: no-repeat;
  flex-direction: column;
  display: flex;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;
  object-fit: cover;
  aspect-ratio: 0.75;
  justify-content: space-between;
`;

export const ProgressCx = styled.span`
  background: white;
  padding: 8px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 50%;
  font-size: 14px;
  font-weight: 700;
  font-size: 12px;
  gap: 4px;
  border-radius: 8px 0px 5px;
  img {
    width: 12px;
    height: 12px;
  }
  p {
    color: #383733;
    font-weight: 700;
    font-size: 12px;
  }
`;

export const IconTimerCx = styled.div`
  display: flex;
  padding: 0 8px 8px 8px;
  justify-content: space-between;
`;

export const TimerCx = styled.span`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px;
  border-radius: 100px;
  min-width: 60px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 12px;
    height: 12px;
  }
`;
