import Vue from 'vue';
import Vuex from 'vuex';




Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        isFirstNumber: true,
        isFloated: false,
        aFloated:false,
        bFloated:false,
        currentOperator: null,
        firstNumber:'',
        secondNumber:'',
        calculated: false,
        result: 0

    },
    getters:{
        getCurrentNumber(state){
            let a = state.firstNumber;
            let b = state.secondNumber;

            if(state.isFloated){
                a = parseFloat(a);
                b = parseFloat(b);
                
            }
            if(!state.calculated){
                if(isNaN(a)){
                    a = '0.';
                }
                else if(isNaN(b)){
                    b = '';
                }
                if(a.toString().length > 17){
                    a = a.toString().substr(0, 17);
                }
                else if(b.toString().length > 17){
                    b = b.toString().substr(0,17);
                }
                return state.isFirstNumber ? a : b;
            }
            else
            {
                state.result = Math.round(state.result * 10000000000000000)/10000000000000000;
                if(state.result.toString().length > 17){
                    state.result = state.result.toString().substr(0, 17);
                }
                return state.result;
            }
                
        }
    },
    mutations:{
        makeFloated(state){
            if(!state.aFloated || !state.bFloated){
                if(state.isFirstNumber){
                    state.firstNumber += '.';
                    console.log(state.firstNumber);
                    state.aFloated = true;
                }
                else{
                    state.secondNumber += '.';
                    state.bFloated = true;
                }
            }
            state.isFloated = true;

        },
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
                if(state.firstNumber.toString().length > 17){
                    state.firstNumber = state.firstNumber.toString().substr(0, 17);
                }
            }
            else{
                state.secondNumber += value;
                if(state.secondNumber.toString().length > 17){
                    state.secondNumber = state.secondNumber.toString().substr(0, 17);
                }
            }
        },
        handleOperator(state, operator){
            state.isFirstNumber = false;
            state.currentOperator = operator;
               

            
        },
        calc(state){
            let a;
            let b;
            if(!state.isFloated){
                a = parseInt(state.firstNumber);
                b = parseInt(state.secondNumber);
            }
            else{
                a = parseFloat(state.firstNumber);
                b = parseFloat(state.secondNumber);
            }
            
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
            if(state.firstNumber === '' || state.secondNumber === '' )
                state.calculated = false 
            else
                state.calculated = true;
        }
    },
    actions:{

    }
})