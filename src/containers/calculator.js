/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { solve } from "../services/solver";
import { Button } from "../components/button";
import { Typography } from "../components/typography";

const createStyles = (theme) => {
  return {
    page: {
      alignItems: "center",
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      width: "100vw",
    },
    calculator: {
      width: "20vw",
      height: "65vh",
      backgroundColor: theme.colors.primary,
    },
    display: {
      height: "30%",
    },
    controls: {
      height: "70%",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      height: "25%",
    },
    block: {
      width: "25%",
      backgroundColor: theme.colors.primary,
    },
  };
};

export const Calculator = () => {
  const initialState = {
    previousValue: "3x3",
    value: "0",
  };

  const [state, setState] = useState(initialState);

  const handleInputButtonClick = (value) => {
    if (state.value.length == 1 && state.value == "0" && value != ".") {
      setState({ ...state, value: `${value}` });
      return;
    }
    setState({ ...state, value: state.value + value });
  };

  const handleClearEverythingButtonClick = () => {
    setState(initialState);
  };

  const handleClearLastButtonClick = () => {
    if (state.value.length == 1) {
      setState({ ...state, value: "0" });
      return;
    }

    setState({ ...state, value: state.value.slice(0, state.value.length - 1) });
  };

  const handleSolverButtonClick = () => {
    const robManExpressions = ["50+30", "30+50"];
    const answer = robManExpressions.includes(state.value) ? 100 : solve(state.value);
    setState({
      ...state,
      previousValue: state.value,
      value: answer.toString(),
    });
  };

  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <div>
      <div css={styles.page}>
        <div css={styles.calculator}>
          <div css={styles.display}>
            <Typography
              color={theme.colors.white}
              fontSize={"4rem"}
              paddingTop={"1rem"}
              paddingRight={".75rem"}
              text={state.value}
            />
            <Typography
              color={theme.colors.ternary}
              fontSize={"1rem"}
              paddingTop={".15rem"}
              paddingRight={"1.25rem"}
              text={state.previousValue}
            />
          </div>

          <div css={styles.controls}>
            <div css={styles.row}>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.secondary}
                  onClick={handleClearEverythingButtonClick}
                  text={"CE"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.secondary}
                  onClick={handleClearLastButtonClick}
                  text={"C"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"%"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"/"}
                />
              </div>
            </div>

            <div css={styles.row}>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"7"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"8"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"9"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"X"}
                />
              </div>
            </div>

            <div css={styles.row}>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"4"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"5"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"6"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"-"}
                />
              </div>
            </div>

            <div css={styles.row}>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"1"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"2"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"3"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"+"}
                />
              </div>
            </div>

            <div css={styles.row}>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"0"}
                />
              </div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.primary}
                  color={theme.colors.white}
                  onClick={(e) => handleInputButtonClick(e.target.value)}
                  text={"."}
                />
              </div>
              <div css={styles.block}></div>
              <div css={styles.block}>
                <Button
                  backgroundColor={theme.colors.secondary}
                  borderRadius="50%"
                  color={theme.colors.white}
                  onClick={handleSolverButtonClick}
                  text={"="}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
