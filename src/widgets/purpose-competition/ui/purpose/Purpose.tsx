'use client'

import { FC } from 'react'

import { useGetPurposeCompetition } from '@/features/get-purpose-competition'

import {
	LoaderPurpose,
	PurposeCompetitionEl,
} from '@/entities/purpose-competition-el'

import styles from './Purpose.module.scss'

const Purpose: FC = () => {
	const { isLoading, text = '', isSuccess } = useGetPurposeCompetition()

	if (isLoading) return <LoaderPurpose />
	if (isSuccess) return <PurposeCompetitionEl text={text} />
}

export default Purpose
