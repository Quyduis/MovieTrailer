import { Text } from "component";
import { KeywordsItem } from "model/movie";
import { KeywordsContainer } from "./styled";

interface Iprops {
  keyWords: KeywordsItem[];
}

const Keywords = ({ keyWords }: Iprops) => {
  return (
    <div>
      <KeywordsContainer>
      <Text className="title" size="medium" weight="bold">
        Keywords
      </Text>
        {keyWords?.map((item) => (
          <div className="item">
            <Text className="content-text" size="tiny">
              {item?.name}
            </Text>
          </div>
        ))}
      </KeywordsContainer>
    </div>
  );
};

export default Keywords;
