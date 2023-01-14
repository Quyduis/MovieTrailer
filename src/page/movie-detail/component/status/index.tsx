import { StatusContainer } from "./styled";
import { Text } from "component";
import { MovieDetail } from "model/movie";

interface IProps {
  movieDetail?: MovieDetail;
}

const Status = ({ movieDetail }: IProps) => {
  /**
   * Format US Currency
   */
  const formatUsCurrentcy = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return (
    <StatusContainer>
      <ul>
        {/* Status */}
        <li>
          <Text
            className="content-text movie-title"
            size="medium"
            weight="bold"
          >
            Status
          </Text>

          <Text className="content-text" size="tiny">
            {movieDetail?.status || ""}
          </Text>
        </li>

        {/* Budget */}
        <li>
          <Text
            className="content-text movie-title"
            size="medium"
            weight="bold"
          >
            Budget
          </Text>

          <Text className="content-text" size="tiny">
            {formatUsCurrentcy.format(movieDetail?.budget || 0) || ""}
          </Text>
        </li>

        {/* Revenneu */}
        <li>
          <Text
            className="content-text movie-title"
            size="medium"
            weight="bold"
          >
            Revenneu
          </Text>

          <Text className="content-text" size="tiny">
          {formatUsCurrentcy.format(movieDetail?.revenue || 0) || ""}
          </Text>
        </li>
      </ul>
    </StatusContainer>
  );
};

export default Status;
