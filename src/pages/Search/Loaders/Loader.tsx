import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={360}
    viewBox="0 0 1200 360"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="19" y="23" rx="2" ry="2" width="284" height="284" /> 
    <rect x="19" y="319" rx="0" ry="0" width="155" height="48" />
    <rect x="400" y="23" rx="2" ry="2" width="500" height="40" />
    <rect x="400" y="100" rx="2" ry="2" width="870" height="206" />
  </ContentLoader>
)
export default Loader