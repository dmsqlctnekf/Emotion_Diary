const EmotionItem = ({ emotion_id, emotion_img, emotion_descript, onClick, isSelected }) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        'EmotionItem',
        isSelected ? `EmotionItem-on-${emotion_id}` : 'EmotionItem-off',
      ].join(' ')}>
      <img src={emotion_img} alt={emotion_descript} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default EmotionItem;
