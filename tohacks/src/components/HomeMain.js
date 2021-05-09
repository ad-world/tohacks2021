import React, { useState, useEffect } from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import NewsCard from './NewsCard'

function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }

export default function HomeMain() {
    const data = require('../news_sample.json');
    console.log(data)

    const [current, setCurrent] = useLocalStorage('current-tab', 'politics')
    console.log(current);


    return (
        <Container className="background">
            <Grid columns={3}>
                <Grid.Row>
                    {
                        data && data.map(article => {
                            return (
                                <GridColumn key={article.id} style={{ marginBottom: 20 }}>
                                    <NewsCard article={article} />
                                </GridColumn>
                            )
                        })
                    }
                </Grid.Row>
            </Grid>
        </Container>
    )
}
