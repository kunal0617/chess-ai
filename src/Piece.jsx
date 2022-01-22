import { useDrag, DragPreviewImage } from "react-dnd";

export default function Piece({ piece: { type, color }, position }) {
  const [{ isDragging }, drag, preview] = useDrag({
    type: "piece",
    item: { type: "piece", id: `${position}_${type}_${color}` },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  return (
    <>
      <DragPreviewImage
        connect={preview}
        src={`/assets/${type}_${color}.png`}
      />
      <div
        className="piece-container"
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        <img src={`/assets/${type}_${color}.png`} alt="" className="piece" />
      </div>
    </>
  );
}
