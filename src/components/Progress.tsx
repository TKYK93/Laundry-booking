import CircularProgress from '@material-ui/core/CircularProgress'

const LoadingProgress: React.FC = (props) => {
  return (
    <div>
      <p>Loading...</p>
      <CircularProgress />
    </div>
  )
}

export default LoadingProgress
