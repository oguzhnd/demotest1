"use client"

import { Container, Grid, Paper, Stack } from '@mantine/core'
import React from 'react'

const HotelReservation = () => {
  return (
    <Container w="100%" size="xl">
      <Grid gutter="xs">
        <Grid.Col span={9}>
          <Stack gap="xs">
            <Paper h={120} p="sm" withBorder>

            </Paper>
            <Paper h={120} p="sm" withBorder>

            </Paper>
            <Paper h={120} p="sm" withBorder>

            </Paper>
            <Paper h={120} p="sm" withBorder>

            </Paper>
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack gap="xs">
            <Paper h={80} p="sm" withBorder>

            </Paper>
            <Paper h={80} p="sm" withBorder>

            </Paper>
            <Paper h={80} p="sm" withBorder>

            </Paper>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default HotelReservation