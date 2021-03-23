import React, { useMemo } from 'react'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ({history}) => {
   
    const location = useLocation();
    const {q = '' } = queryString.parse(location.search);

    const [{searchText}, handleInputChange, reset ] =useForm({
        searchText: q
    });
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    
   
    const handleSubmitForm = (e) =>{
        e.preventDefault();
       
        history.push(`?q=${searchText}`);
        
        //reset();
    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSubmitForm}>
                        <input 
                            type="text"
                            name="searchText"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            value={searchText}
                            onChange={ handleInputChange }
                            
                        />
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        ( q === '' ) 
                            &&  
                            <div className="alert alert-info animate__animated animate__fadeIn"> 
                                Search a hero
                            </div>           
                    }
                    {
                        (q !=='' && heroesFiltered.length === 0 )
                        &&
                        <div className="alert alert-danger animate__animated animate__fadeIn"> 
                                There is no a hero with {q}
                        </div> 
                    }
  
                    {
                        heroesFiltered.map(
                            hero=>(
                                <HeroCard key={hero.id} {...hero}/>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}
