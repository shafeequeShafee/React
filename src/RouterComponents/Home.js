import Greet from '../components/Greet'
import Welcome from '../components/Welcome'
import Hello from '../components/Hello'
import Message from '../components/Message'
import Counter from '../components/Counter'
import EventHandling from '../components/EventHandling'
import EventHandlingClass from '../components/EventHandlingClass'
import EventBind from '../components/EventBind'
import Parent from '../components/Parent'
import ConditionRendering from '../components/ConditionRendering'
import ListRendering from '../components/ListRendering'
import Stylesheet from '../components/Stylesheet'
import Inline from '../components/Inline'




// componentsTwo
import Form from '../componentsTwo/Form'
import LifeCycleA from '../componentsTwo/LifeCycleA'
import FragmentDemo from '../componentsTwo/FragmentDemo'
import Table from '../componentsTwo/Table'
import ParentComp from '../componentsTwo/ParentComp';
import RefsDemo from '../componentsTwo/RefsDemo'
import FocusInput from '../componentsTwo/FocusInput';
import ForwardPIRef from '../componentsTwo/ForwardPIRef';

// componentsThree
import PortalDemo from '../componentThree/PortalDemo';
import ParentModel from '../componentThree/ParentModel';
import Hero from '../componentThree/Hero';
import ErrorBoundary from '../componentThree/ErrorBoundary';
import ClickCounter from '../componentThree/ClickCounter';
import HoverCount from '../componentThree/HoverCount';
import ClickCounter2 from '../componentThree/ClickCounter2';
import HoverCounter2 from '../componentThree/HoverCounter2';
import RenderProps from '../componentThree/RenderProps';
import RenderCount from '../componentThree/RenderCount';


// componentFour
import ComponentC from '../componentFour/ComponentC';
import { UserProvider } from '../componentFour/UserContext';
import PostList from '../componentFour/PostList';
import PostForm from '../componentFour/PostForm';




// importing styles
import '../AppStyle.css'
import styles from '../AppStyle.module.css'



const Home = () => {
    
    return (
        <div>
            <h4>Home Page</h4>
            <h1>Props</h1>
        <h5>################################################################################################</h5>
        {/* props */}
        <h1> functional props</h1>
        <Greet name="sfq" nikename="gareembai" />
        <Greet name="Hiii" nikename="hiii" />
        <Greet name="mandu" nikename="akhila"> <button>Action</button></Greet>
        <Greet name="parol" nikename="dilkshith"> <p>This is children props</p></Greet>

        {/* class props */}
        <h1>class props</h1>
        <h5>################################################################################################</h5>
        <Welcome name="mandu" nikename="akhila" />
        <Welcome name="sfq" nikename="gareembai" />

        <h1> Difference blw jsx and normal rendering</h1>
        <h5>################################################################################################</h5>
        <Hello />
        <h1>state and set state in class component </h1>
        <h5>################################################################################################</h5>
        <Message />
        <Counter />
        <h1>Event Handling </h1>
        <h5>################################################################################################</h5>
        <h3> in function component</h3>
        <EventHandling />
        <h3> in class component</h3>
        <EventHandlingClass />
        <h3>Event Bind</h3>
        <EventBind />
        <h1>Child to parent Communication</h1>
        <h5>################################################################################################</h5>
        <Parent />
        <h1>Conditional Rendering </h1>
        <h5>################################################################################################</h5>
        <ConditionRendering />
        <h1>List Rendering </h1>
        <h5>################################################################################################</h5>
        <ListRendering />
        <h1>Styling and CSS Basics</h1>
        <h5>################################################################################################</h5>
        <Stylesheet primary={false} />
        <Inline />
        <h5 className='error'>Error</h5>
        <h5 className={styles.sucess}>Sucess</h5>
        <h1>Handling Form in React</h1>
        <h5>################################################################################################</h5>
        <Form />
        <h1>Life Cycle Methods</h1>
        <h5>################################################################################################</h5>
        <h4>Mounting Life Cycle Methods</h4>
        <h6>********************************************</h6>
        <LifeCycleA />
        <h4>Updating Life Cycle Methods</h4>
        <h6>********************************************</h6>
        <h4>Unmounting Phase Methods</h4>
        <h6>********************************************</h6>
        <h1>Fragments</h1>
        <h5>################################################################################################</h5>
        <FragmentDemo />
        <h4>oru example</h4>
        <h6>********************************************</h6>
        <Table />
        <h1>Pure Components  and Memo component, replacement for purecomponent in functional component</h1>
        <h5>################################################################################################</h5>
        <ParentComp />
        <h1>Refs in React</h1>
        <h5>################################################################################################</h5>
        <h4>in class component // ref cannot attach to functional components</h4>
        <h6>********************************************</h6>
        <RefsDemo />
        <h4>in class component from parent to child</h4>
        <h6>********************************************</h6>
        <FocusInput />
        <h4>Forwarding Refs</h4>
        <h6>********************************************</h6>
        <ForwardPIRef />
        <h1>React Portals</h1>
        <h5>################################################################################################</h5>
        <PortalDemo />
        <h4>real world example</h4>
        <h6>********************************************</h6>
        <ParentModel />
        <h4>portal event bubbing</h4>
        <h6>https://codepen.io/gaearon/pen/jGBWpE?editors=0010</h6>
        <h1>Error Boundary</h1>
        <h5>################################################################################################</h5>
        <ErrorBoundary>
          <Hero heroName="Iron Man" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Captain America" />  
        </ErrorBoundary>
        <ErrorBoundary>
           {/* <Hero heroName="joker" /> */} 
           <Hero heroName="mandu" /> 
        </ErrorBoundary>
        <h1>Higher Order Components or reusing code</h1>
        <h5>################################################################################################</h5>
        <ClickCounter friend="anu"/>
        <HoverCount/>
        <h1>Render Props for sharing codes</h1>
        <h5>################################################################################################</h5>
        {/* <ClickCounter2/>
        <HoverCounter2/> */}
        <RenderProps render={(isLoggedIn)=> isLoggedIn ? 'sfq' :'Guest'}/>
        <RenderCount render={(count,incrementCount)=><ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>}/>
        <RenderCount render={(count,incrementCount)=><HoverCounter2 count={count} incrementCount={incrementCount}></HoverCounter2>}/>
        <h6>allekil eganneyum cheyyaam children aayi, this.props.children in RenderCount Component</h6>
        {/* <RenderCount>{(count,incrementCount)=><ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>}</RenderCount> */}
        <h1>Context // njammallae provide and inject in vue</h1>
        <h5>################################################################################################</h5>
        <UserProvider value="sfq">
           <ComponentC/>
        </UserProvider>
        <h4>Multiple context nd , ath nokannam</h4>
        <h1>HTTP and React</h1>
        <h5>################################################################################################</h5>
        <h4>Get Request</h4>
        <h6>****************************</h6>
        <PostList/>
        <h4>Post Data</h4>
        <h6>****************************</h6>
        <PostForm/>
        <h4>React Router</h4>
        <h6>****************************</h6>
            
        </div>
    )
}
export default Home