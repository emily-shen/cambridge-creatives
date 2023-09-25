import React, { useState, useEffect } from "react";
import { Article,Interview } from "api";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

export const useInterviewCheckbox = (interviews: Interview[] , pageTags: string[]) => {
  const [filterData, setFilterData] = useState(interviews)
  const [checkboxes, setCheckboxes] = useState(Object.fromEntries(
    pageTags?.map(checkbox => [checkbox, false])
  ))

  useEffect(() => {
    // if everything is unchecked, show all articles
    if (!Object.values(checkboxes).some(a => a)) {
      setFilterData(interviews)
    } else {
      setFilterData(interviews.filter(interview => {
        // mess that returns each article's tags as an array
        let current_tags = [] as string[];
        interview.interview_filters?.data?.map( tag => {
          if (tag.attributes?.tag === undefined) return;
          else {
            current_tags.push(tag.attributes.tag)
          }
        })
        // if *any* of the article's tags match the current checkboxes, return true for the filter 
        return current_tags.some(tag => {
          return checkboxes[tag]
        })

      }))
    }

  }, [checkboxes]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    let updatedCheckboxes = {...checkboxes};
    updatedCheckboxes[event.target.name] = !checkboxes[event.target.name];
    setCheckboxes(updatedCheckboxes);
  };
  return {values:{checkboxes, filterData}, actions: {handleChange}}
}


export const useCheckbox = (articles: Article[] , pageTags: string[]) => {
  const [filterData, setFilterData] = useState(articles)
  const [checkboxes, setCheckboxes] = useState(Object.fromEntries(
    pageTags?.map(checkbox => [checkbox, false])
  ))

  useEffect(() => {
    // if everything is unchecked, show all articles
    if (!Object.values(checkboxes).some(a => a)) {
      setFilterData(articles)
    } else {
      setFilterData(articles.filter(article => {
        // mess that returns each article's tags as an array
        let current_tags = [] as string[];
        article.article_filters?.data?.map( tag => {
          if (tag.attributes?.tag === undefined) return;
          else {
            current_tags.push(tag.attributes.tag)
          }
        })
        // if *any* of the article's tags match the current checkboxes, return true for the filter 
        return current_tags.some(tag => {
          return checkboxes[tag]
        })

      }))
    }

  }, [checkboxes]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    let updatedCheckboxes = {...checkboxes};
    updatedCheckboxes[event.target.name] = !checkboxes[event.target.name];
    setCheckboxes(updatedCheckboxes);
  };
  return {values:{checkboxes, filterData}, actions: {handleChange}}
}

interface CheckboxGroupProps {
  pageTags: string[],
  checkboxes: {[k:string]:boolean},
  handleChange: React.ChangeEventHandler,
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({pageTags, checkboxes, handleChange}) => {
  return <>
    <div className="flex flex-row gap-4 flex-wrap">
    {pageTags.map((checkbox, index) => {
      return <label className="text-lg font-normal relative" key={"checkbox"+index}>
        <input type="checkbox" name={checkbox} checked={checkboxes[checkbox]} onChange={handleChange} className="opacity-0 absolute top-0"/>
        <FontAwesomeIcon role="checkbox" className="text-xl mr-2" icon={checkboxes[checkbox] ? faSquareCheck : faSquare}/>
        {checkbox}
      </label>
      })}
    </div>
  </>
}
