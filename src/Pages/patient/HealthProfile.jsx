import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {setHealthProfileInfo,setIsHealthProfileComplete} from '../../store/patient/healthProfile'
import { useEffect } from 'react';
import axios from 'axios';

const HealthProfile = () => {
    const healthProfileInfo = useSelector(state => state.healthProfile.healthProfileInfo);
    const isHealthProfileClick = useSelector(state => state.healthProfile.isClick);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
     const {name,value} = e.target;
     dispatch(setHealthProfileInfo({ [name] : value }));
  }

  useEffect(()=>{
    const MedicalRecordInfoFormComplete = Object.keys(healthProfileInfo).every(key => healthProfileInfo[key]);
    dispatch(setIsHealthProfileComplete(MedicalRecordInfoFormComplete))
  },[healthProfileInfo])
    
  const infoRedIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4 ">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg> ;

  const infoWhiteIcon =< svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4 ">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg> ;

  return (
    <>
        <div className="max-w-screen-lg mx-auto mt-6 ">
          <h4 className="text-lg font-bold text-black">Medical Record</h4>
          <div className='flex flex-col items-center gap-6 w-full mx-auto mt-3 p-3'>
            <div className='flex w-full items-center'>
              <div className="w-full flex flex-col">
                <label className='text-base font-semibold text-black'>Select Bloodtype</label>
                <select id="bloodType" value={healthProfileInfo.bloodType} onChange={changeHandler}
                  name="bloodType" className={`bg-gray-50 outline  text-gray-900 
                text-sm rounded-lg focus:ring-blue-500  block focus:outline-blue-500 w-[40%] p-2.5 mt-3 border-r-8 border-transparent ${isHealthProfileClick && !healthProfileInfo.bloodType? 'outline-red-400' : 'outline-gray-300'} `}>
                    <option value="">Blood type</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                </select>
                { isHealthProfileClick && !healthProfileInfo.bloodType? <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoRedIcon}</span>
                    <span className='h-full text-xs text-red-500'>Please select your bloodtype</span>
                </div>
                :
                <div className='w-full flex items-center mt-1 gap-1'> 
                    <span className=''>{infoWhiteIcon}</span>
                    <span className='h-full text-xs text-white'>Please select your bloodtype</span>
                </div>
                }
              </div>
            </div>
          </div> 
        </div>
    </>
  )
}

export default HealthProfile