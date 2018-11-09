import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        isFirstNumber: true,
        isFloated: false,
        currentOperator: null,
        firstNumber:'',
        secondNumber:'',
        calculated: false,
        result: 0

    },
    getters:{
        getCurrentNumber(state){
            if(!state.calculated)
                return state.isFirstNumber ? state.firstNumber : state.secondNumber;
            else
                return state.result;
        }
    },
    mutations:{
        clear(state){
            state.isFirstNumber = true;
            state.isFloated = false;
            state.firstNumber = '';
            state.secondNumber = '';
            state.currentOperator = null;
            state.calculated = false;
            state.result = 0;
        },
        handleNumber(state, value){
            if(state.isFirstNumber){
                state.firstNumber += value;
            }
            else{
                state.secondNumber += value;
            }
        },
        handleOperator(state, operator){
            state.isFirstNumber = false;
            state.currentOperator = operator;
               

            
        },
        calc(state){
            let a = parseInt(state.firstNumber);
            let b = parseInt(state.secondNumber);
            if(state.calculated){
                switch (state.currentOperator){
                    case '/':
                        state.result /= b;
                        break;
                    case '*':
                        state.result *= b;
                        break;
                    case '+':
                        state.result += b;
                        break;
                    case '-':
                        state.result -= b;
                        break;  
                }   
            }
            else{
                switch (state.currentOperator){
                    case '/':
                        state.result = a / b;
                        break;
                    case '*':
                        state.result = a * b;
                        break;
                    case '+':
                        state.result = a + b;
                        break;
                    case '-':
                        state.result = a - b;
                        break;  
                }
            }
           
            state.calculated = true;
        }
    },
    actions:{

    }
})