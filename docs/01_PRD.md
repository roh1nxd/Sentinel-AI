# Product Requirement Document (PRD)

## Product Name

Sentinel AI — Emotionless Autonomous Trading Agent

## Vision

Build a simple but powerful autonomous trading agent that can:

* Monitor crypto prices in real time
* Make logical, rule-based decisions
* Execute trades automatically
* Pay for its own data using x402
* Explain its decisions through logs

## Problem Statement

Most traders lose money due to emotional decisions, delayed reactions, and lack of discipline.

## Solution

Sentinel AI removes human emotion by:

* Reacting instantly to market changes
* Following predefined logic strictly
* Executing trades without hesitation
* Providing transparent reasoning for every action

## Target Users

* Developers exploring AI agents
* DeFi builders
* Algorithmic traders

## Core Features

### 1. Price Monitoring

* Fetch ETH/USDC price every 60 seconds

### 2. Decision Engine

* Buy when price drops ≥ 3%
* Sell when price rises ≥ 4%

### 3. Risk Management

* Stop-loss at 2% loss

### 4. Autonomous Execution

* Execute trades automatically without user input

### 5. x402 Payment Integration

* Agent pays for premium data before making decisions

### 6. Transparent Logging

* Each action is logged with reasoning

## Non-Goals (Important)

* No complex ML models
* No advanced UI
* No multi-token strategies

## Success Criteria

* Agent runs without crashing
* At least one successful trade execution
* Clear logs showing reasoning
* Smooth demo flow

## Demo Definition

A working agent that:

1. Starts successfully
2. Detects a price change
3. Makes a decision
4. Executes a trade
5. Logs the entire process clearly

## Constraints

* Must be built within 6 hours
* Should be simple and reliable
* Prefer testnet over mainnet

## Key Principle

"Simplicity + Reliability > Complexity"
