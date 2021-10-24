function TestElem({ imageTitle, imageSource }) {
  return (
    <div>
      <p>{imageTitle}</p>
      <img src={imageSource} alt="" />
    </div>
  );
}

export default TestElem;
