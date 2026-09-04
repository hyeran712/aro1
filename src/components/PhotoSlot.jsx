// 실제 사진이 준비되면 이 컴포넌트 대신 <img src="..." /> 로 바꿔도 되고,
// src prop을 넘겨주면 자동으로 사진이 보이도록 만들어뒀습니다.
function PhotoSlot({ caption, ratio, src, alt, style }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || caption || ''}
        style={{ width: '100%', aspectRatio: ratio || '4/3', objectFit: 'cover', borderRadius: 2, ...style }}
      />
    );
  }
  return (
    <div className="photo-slot" style={{ aspectRatio: ratio || '4/3', ...style }}>
      <span className="cap">사진 자리 — {caption}</span>
    </div>
  );
}

export default PhotoSlot;
