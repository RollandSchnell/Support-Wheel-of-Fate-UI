import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../../actions/index'
import { SupportRow } from '../../components/support-row/SupportRow'

class IndexPage extends React.Component {

    assignSupport = () => {
       this.props.actions.assignSupport();
    };

    renderScheduledList = () => {
        const { scheduleList } = this.props;

        return scheduleList ? scheduleList.map( schedule => <SupportRow  {...schedule} key={ Math.random() }/>) : null;
    };

    render() {
        return (
            <section className="index-page" id="home">
                <div className="">
                    <div className="">
                        <h2>Support Wheel Of Fate</h2>
                        <div className="controls-container">
                            <button onClick={ this.assignSupport }>Assign Support</button>
                        </div>
                        <div className="scheduled-list-container">
                            <h2> Scheduled List for day { this.props.supportDay || 1 }</h2>
                            { this.renderScheduledList() }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps (state) {
    return {
        scheduleList: state.mainReducer.data.scheduleList,
        supportDay: state.mainReducer.data.supportDay,
        fullSchedule: state.mainReducer.data.fullSchedule
    }
}

function mapDispatchToProps(dispatch){
    return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);