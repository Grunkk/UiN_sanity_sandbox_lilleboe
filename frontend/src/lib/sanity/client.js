import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: '0m5d7wrs',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})