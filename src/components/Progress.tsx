import { makeStyles } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(() => ({
  loading: {
    marginLeft: '1.5rem',
  },
}))

const LoadingProgress: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.loading}>
      <p>Loading...</p>
      <CircularProgress />
    </div>
  )
}

export default LoadingProgress
