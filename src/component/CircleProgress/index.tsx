import { useEffect, useRef } from "react";
import { PercentContainer } from "./styled";

interface Props {
    score: number
}

const CircleProgress = ({score}: Props) => {
  const canvasProgressRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasProgressRef.current) {
      const canvas = canvasProgressRef.current;
      /**  NOTE(QUY-PHAM): Start optimize canvas display: */
      // 1.Get the DPR and size of the canvas
      var dpr = window.devicePixelRatio;
      var rect = canvas.getBoundingClientRect();
      
      // 2.Set the "actual" size of the canvas
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // 3.Set the "actual" size of the canvas
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // 4.Create canvas context
      const canvasContext = canvas.getContext("2d");
      
      // 5.Scale the context to ensure correct drawing operations
      canvasContext!.scale(dpr, dpr);
      /** NOTE(QUY-PHAM): End optimize canvas display: */

      canvasContext!.beginPath();
      // Circle progress background
      canvasContext!.arc(17, 17, 17, 0, Math.PI * 2);
      canvasContext!.fillStyle = "#081c22";
      canvasContext!.imageSmoothingEnabled = true;
      canvasContext!.fill();

      // Circle expect percent
      canvasContext!.beginPath();
      canvasContext!.arc(17, 17, 14, 0, Math.PI * 2);
      canvasContext!.strokeStyle = "#20452a";
      canvasContext!.lineWidth = 2;
      canvasContext!.stroke();

      // Circle actual percent
      const converPercentToRadians = (percent: number) => {
        const percentToDegree = (percent / 100) * 360;
        const radians = (Math.PI / 180) * percentToDegree;

        return radians;
      };

      canvasContext!.beginPath();
      canvasContext!.arc(
        17,
        17,
        14,
        Math.PI * 1.5,
        converPercentToRadians(score) + Math.PI * 1.5
      );
      canvasContext!.strokeStyle = "#21d07a";
      canvasContext!.lineWidth = 2;
      canvasContext!.rotate((Math.PI / 180) * 90);
      canvasContext!.stroke();
    }
  }, [canvasProgressRef, score]);

  return (
    <PercentContainer>
      <div className="percent-content">{score}
        <p style={{fontSize: '4px'}}>%</p>
      </div>

      <canvas
        width={34}
        height={34}
        ref={canvasProgressRef}
        id="canvasDrawPath3"
      ></canvas>
    </PercentContainer>
  );
};

export default CircleProgress;
