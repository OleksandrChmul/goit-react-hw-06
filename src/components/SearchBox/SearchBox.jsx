import React from 'react'
import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/filtersSlice'
import { getFilters } from '../../redux/selectors'

const SearchBox = () => {
	const dispatch = useDispatch()
	const filter = useSelector(getFilters)
	const changeInput = e => {
		const word = e.target.value.trim()
		dispatch(setFilter(word))
	}
	return (
		<label className={css.label}>
			Find contacts by name
			<input
				className={css.input}
				type='text'
				value={filter}
				onChange={changeInput}
				placeholder='Search'
			/>
		</label>
	)
}
export default SearchBox
