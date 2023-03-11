
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp  from '../../hooks/use-http';
const NewTask = (props) => {

  const httpData = useHttp();
  const { isLoading, error, sendRequest: fetchTasks } = httpData;
  const createdTask=(taskText,data)=>{
    const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
  }
  const enterTaskHandler = async (taskText) => {
    fetchTasks(
      {
        url: "https://wind-turbine-power-predictor-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        method:"POST",
        body:{text:taskText},
        headers: {
          "content-type": "application/json",
        },
      },
      createdTask.bind(null,taskText)
    )}
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
